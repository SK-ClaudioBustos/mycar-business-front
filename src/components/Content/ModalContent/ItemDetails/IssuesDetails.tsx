
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IssuesDetails = ({ data }: { data: Record<string, any> | null | undefined }) => {
    return (
        <>
            <div>
                <p>Issue Id</p>
                <span>{data?.id}</span>
            </div>
            <div>
                <p>Name</p>
                <span>{data?.name}</span>
            </div>
            <div>
                <p>Description</p>
                <span>{data?.description}</span>
            </div>
            <div>
                <p>Date</p>
                <span>{data?.notificationDate}</span>
            </div>
            <div>
                <p>Distance</p>
                <span>{data?.notificationDistance}</span>
            </div>
            <div>
                <p>Current Distance</p>
                <span>{data?.currentDistance}</span>
            </div>
            <div>
                <p>Car Status</p>
                <span>{data?.statusEntity}</span>
            </div>
            <div>
                <p>Type</p>
                <span>{data?.typeEntity}</span>
            </div>
        </>
    );
}