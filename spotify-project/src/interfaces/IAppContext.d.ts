interface IMusicView {
  artistName: string;
  collectionName: string;
  trackName: string;
  previewUrl: string;
  primaryGenreName: string;
  artworkUrl100: string;
  trackId: string;
}

interface IAppContext {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  musics: string[];
  setMusics: React.Dispatch<React.SetStateAction<string[]>>;
  musicView: IMusicView;
  setMusicView: React.Dispatch<React.SetStateAction<IMusicView>>;
}
