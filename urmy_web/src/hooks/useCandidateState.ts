import {create} from 'zustand'

interface CandidateState {
    isVisibleCandidate: boolean
    setIsVisibleCandidate:(isVisibleCandidate: boolean) => void
}

const useCandidateState = create<CandidateState>((set) => ({
    isVisibleCandidate: false,
    setIsVisibleCandidate: (isVisibleCandidate) => set({ isVisibleCandidate }),
}));

export default useCandidateState;