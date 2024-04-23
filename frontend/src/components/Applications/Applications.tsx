import {Text} from '@gravity-ui/uikit';
import ApplicationFilters from '../Filters';
import ApplicationList from './ApplicationList';

const Applications = () => {
    return (
        <div>
            <div>
                <Text variant="display-2">Заявки на перевозку</Text>
            </div>
            <ApplicationFilters />
            <ApplicationList />
        </div>
    );
};

export default Applications;
