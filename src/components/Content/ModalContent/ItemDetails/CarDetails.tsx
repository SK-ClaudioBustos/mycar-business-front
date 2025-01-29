
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CarDetails = ({ data }: { data: Record<string, any> | null | undefined }) => {
    return (
        <>
            <div>
                <p>Car Id</p>
                <span>{data?.id}</span>
            </div>
            <div>
                <p>Company</p>
                <span>{data?.companyName}</span>
            </div>
            <div>
                <p>Model</p>
                <span>{data?.modelName}</span>
            </div>
            <div>
                <p>KM</p>
                <span>{data?.km}</span>
            </div>
        </>
    );
}