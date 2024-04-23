import {Col, Row} from '@gravity-ui/uikit';
import {useAppSelector} from '../../store/hooks';
import ApplicationItem from '../ApplicationItem/ApplicationItem';

const ApplicationList = () => {
    const applications = useAppSelector((state) => state.application.applications);

    return (
        <Row space="3">
            {applications.length
                ? applications.map((application) => (
                      <Col s="6" key={application.id}>
                          <ApplicationItem application={application} />
                      </Col>
                  ))
                : 'Записей пока нет'}
        </Row>
    );
};

export default ApplicationList;
