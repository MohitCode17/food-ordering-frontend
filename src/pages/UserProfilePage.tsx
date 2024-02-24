import { useGetCurrentUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isGetUserLoading } = useGetCurrentUser();

  if (isGetUserLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateUserLoading}
      />
    </>
  );
};

export default UserProfilePage;
