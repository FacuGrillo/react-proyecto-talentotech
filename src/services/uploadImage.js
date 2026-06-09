const ENDPOINT = "https://api.imgbb.com/1/upload";
const IMGBB_API_KEY = "a450b5c5d7a6d91f5c4ddfbe73c3453f";

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error("Error al subir la imagen");
        }
        return data.data.url;
    } catch (error) {
        console.error("Error al subir la imagen a imgbb: ", error);
        throw error;
    }
};