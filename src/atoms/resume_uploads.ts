import { atom } from 'recoil';

interface FileListState {
  fileList: File[] | null;
}

export const fileListState = atom<FileListState>({
  key: 'fileListState',
  default: {
    fileList: null,
  },
});

export const resumeObjectsState = atom({
  key: 'resumeObjectsState',
  default: [], // Initial value is an empty array
});