import IArtist from "./IArtist";
import ITrack from "./ITrack";

export interface IAccount {
  accountId: string;
  name: string;
  email: string;
  spotifyVerified: boolean;
  spotify: {
    artists: IArtist[]
    tracks: ITrack[]
  } 
  facebookVerified: boolean;
  facebook: {
    likes: Record<string, any>[],
    facebookId: string;
    name: string;
    hometown: string;
    profilePicURL: string;
  }
}

export const INITIAL_ACCOUNT: IAccount = {
  accountId: "",
  name: "",
  email: "",
  spotifyVerified: false,
  spotify: {
    artists: [],
    tracks: []
  },
  facebookVerified: false,
  facebook: {
    likes: [],
    facebookId: '',
    name: '',
    hometown: '',
    profilePicURL: ''
  }
}

export default interface IAccountState {
  account: IAccount
  setAccount: (a: IAccount) => void
}