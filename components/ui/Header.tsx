'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';

function Header() {
  const { user } = useUser();
  return (
    <div className="flex justify-between p-4">
      <div>
        {user ? (
          <div>
            <p>Hi {user.fullName}</p>
          </div>
        ) : (
          <div>
            <p>Hi Guest</p>
          </div>
        )}
      </div>
      {/** breadcrumbs */}
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
