interface AuthState {
    isAuthenticated: boolean;
    userName: string | null;
    userId: string | null;
}

type AuthContext = {
    isAuthenticated: boolean;
    userName: string | null;
    userId: string | null;
    refreshAuth: () => Promise<boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}