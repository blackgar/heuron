import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const imageListAtom = atom({
  key: 'imageList',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
