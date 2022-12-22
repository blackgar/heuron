import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const imageListAtom = atom({
  key: 'imageList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
