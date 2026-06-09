export const validateProduct = (product) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre es obligatorio";
    }

    if (!product.price || product.price <= 0) {
        errors.price = "El precio es obligatorio y debe ser mayor a cero";
    }

    if (!product.description.trim()) {
        errors.description = "La descripción es obligatoria";
    }

    if (!product.file) {
        errors.file = "La imagen es obligatoria";
    }

    return errors;
};