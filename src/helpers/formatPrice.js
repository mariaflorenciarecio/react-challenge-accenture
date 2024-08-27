export const formatPrice = (number) => {
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number / 100);

    return formattedPrice.replace(/\u00A0/g, '');
};