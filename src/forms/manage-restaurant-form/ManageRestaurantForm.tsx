import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisinesSection";
import ImageSection from "./ImageSection";
import MenuSection from "./MenuSection";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import { Restaurant } from "@/types";
import { useEffect } from "react";

// Create form Schema
const formSchema = z.object({
  restaurantName: z.string({
    required_error: "restuarant name is required",
  }),
  city: z.string({
    required_error: "city is required",
  }),
  country: z.string({
    required_error: "country is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "delivery price is required",
    invalid_type_error: "must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "estimated delivery time is required",
    invalid_type_error: "must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "image is required" }).optional(),
  imageUrl: z.string().optional(),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  restaurantData?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading, restaurantData }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  // Pre-populated restaurant data for restaurant form
  useEffect(() => {
    if (!restaurantData) {
      return;
    }

    form.reset(restaurantData);
  }, [form, restaurantData]);

  const onSubmit = (formDataJson: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(`menuItems[${index}][price]`, menuItem.price.toString());
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        {/* Detail section */}
        <DetailsSection />
        <Separator />
        {/* Cuisines section */}
        <CuisinesSection />
        <Separator />
        {/* Menu section */}
        <MenuSection />
        <Separator />
        {/* Image section */}
        <ImageSection />
        {/* Submit Button */}
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
