export type RequestState = 'start' | 'end' | 'doNoting' | 'error';

export type Request = {
    state: RequestState,
    errorMessage: string,
}