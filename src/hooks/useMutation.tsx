import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { imageListAtom } from '@/atom';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
  accessToken?: string;
}
type UseMutationResult<T> = [(data?: any) => void, UseMutationState<T>];

function useMutation<T = any>(): UseMutationResult<T> {
  const imageList = useRecoilValue(imageListAtom);
  const [state, setState] = useState<UseMutationState<T>>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  function mutation() {
    if (imageList.length !== 0) return;
    setState(prev => ({ ...prev, loading: true }));
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setState(prev => ({ ...prev, data }));
      })
      .catch(error => setState(prev => ({ ...prev, error })))
      .finally(() => setState(prev => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
export default useMutation;
