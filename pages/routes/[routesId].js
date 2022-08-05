import { useRouter } from 'next/router';

const RoutesDetails = () => {
    const router = useRouter();
    const routesId = router.query.routesId;
    return (
        <div>
            <div>
               hi  {routesId}
            </div>
        </div>
    );
};

export default RoutesDetails;