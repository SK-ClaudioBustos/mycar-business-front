
export const formatDate = (date: string) => {
    const [fecha] = date.split('T');
    const [año, mes, dia] = fecha.split('-');
    const fechaFormateada = `${dia}/${mes}/${año}`;
    return fechaFormateada;
}