import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { imageListAtom } from '@atom';
import { DataType } from '@/types/list';
import { UseMutationResult, UseMutationState } from '@/types/api';

function useMutation<T = any>(): UseMutationResult<T> {
  const imageList = useRecoilValue(imageListAtom);
  const [state, setState] = useState<UseMutationState<T>>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  function mutation() {
    if (imageList.length !== 0) {
      setState(prev => ({ ...prev, loading: false }));
      return;
    }
    setState(prev => ({ ...prev, loading: true }));
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const customData = data.map((v: DataType) => (v = { ...v, src: v.download_url }));
        setState(prev => ({ ...prev, data: customData }));
      })
      .catch(error => setState(prev => ({ ...prev, error })))
      .finally(() => setState(prev => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
export default useMutation;
