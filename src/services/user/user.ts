import {fireBaseAuth} from '../../firebase/firebaseInit';
import { useRequestDispatch } from '../../providers/request';
import { useUserDispatch } from '../../providers/user';
import type {User, UserSignUpFields} from '../../types/user/types';

const useUserService = () => {
    const requestDispatch = useRequestDispatch();
    const userDispatch = useUserDispatch();

    const signUp = async (input: UserSignUpFields): Promise<boolean> => {
        try {
            requestDispatch({ type: 'REQUEST_START' });
            const userCredential = await fireBaseAuth.createUserWithEmailAndPassword(input.email, input.password);

            const {user} = userCredential;
            const accessToken = await user!.getIdToken();
            
            userDispatch({
                type: 'SIGN_UP',
                data: {
                    email: user!.email as string,
                    accessToken: accessToken as string,
                    refreshToken: user?.refreshToken as string,
                }
            });

            return Promise.resolve(true);
        } catch(e) {
            const errorCode: string = e.code;
            requestDispatch({ type: 'REQUEST_ERROR', code: errorCode });
            return Promise.resolve(false);
        } finally {
            requestDispatch({ type: 'REQUEST_END'});
        }
    }

    const login = async (input: UserSignUpFields): Promise<boolean> => {
        try {
            requestDispatch({type: 'REQUEST_START'});
            const userCredential = await fireBaseAuth.signInWithEmailAndPassword(input.email, input.password);

            const {user} = userCredential;
            const accessToken = await user!.getIdToken();
            
            userDispatch({
                type: 'LOGIN',
                data: {
                    email: user!.email as string,
                    accessToken: accessToken as string,
                    refreshToken: user?.refreshToken as string,
                }
            });

            return Promise.resolve(true);
        } catch(e) {
            const errorCode: string = e.code;
            requestDispatch({ type: 'REQUEST_ERROR', code: errorCode });
            return Promise.resolve(false);
        } finally {
            requestDispatch({type: 'REQUEST_END'});
        }
    }

    return {signUp, login};
}

export default useUserService;