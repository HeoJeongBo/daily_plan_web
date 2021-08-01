import {fireBaseAuth} from '../../firebase/firebaseInit';
import { useRequestDispatch } from '../../providers/request';
import type {User, UserSignUpFields} from '../../types/user/types';

const useUserService = () => {
    const requestDispatch = useRequestDispatch();

    const signUp = async (input: UserSignUpFields): Promise<boolean> => {
        try {
            requestDispatch({ type: 'REQUEST_START' });
            const userCredential = await fireBaseAuth.createUserWithEmailAndPassword(input.email, input.password);

            console.log(userCredential);
            // access token >> user.Aa
            // refresh token >> user.refreshToken
            // email >> user.email
            // 

            //  회원가입 후, 바로 로그인 후에 페이지로 갈건지 ?
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
            const userCredential = await fireBaseAuth.signInWithEmailAndPassword(input.email, input.password);

            return Promise.resolve(true);
        } catch {
            return Promise.resolve(false);
        }
    }

    return [signUp, login];
}

export default useUserService;