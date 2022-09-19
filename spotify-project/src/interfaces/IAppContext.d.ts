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
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  favoritesMusics: T[];
  setFavoritesMusics: React.Dispatch<React.SetStateAction<T[]>>;
}
