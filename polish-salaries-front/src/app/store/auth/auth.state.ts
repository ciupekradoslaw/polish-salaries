export interface User {
  id: string;
  login: string;
}

export interface AuthState {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const authInitialState: AuthState = {
  user: null,
  error: null,
  isLoading: false,
  isAuthenticated: false
};
