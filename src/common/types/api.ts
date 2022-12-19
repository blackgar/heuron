export interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
export type UseMutationResult<T> = [(data?: any) => void, UseMutationState<T>];
