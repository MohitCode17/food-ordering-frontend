import {
  useCreateMyRestaurant,
  useGetMyRestaurnat,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurantData } = useGetMyRestaurnat();
  return (
    <ManageRestaurantForm
      restaurantData={restaurantData}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
};

export default ManageRestaurantPage;
