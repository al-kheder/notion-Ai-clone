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
    <div className="flex justify-between items-center p-5">
      <div>
        {user ? (
          <div>
            <h1 className='text-2xl'>Hi {user.fullName}</h1>
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
