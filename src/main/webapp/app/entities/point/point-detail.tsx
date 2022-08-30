import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './point.reducer';

export const PointDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const pointEntity = useAppSelector(state => state.point.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pointDetailsHeading">
          <Translate contentKey="cancerLibraryApp.point.detail.title">Point</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{pointEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="cancerLibraryApp.point.title">Title</Translate>
            </span>
          </dt>
          <dd>{pointEntity.title}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="cancerLibraryApp.point.description">Description</Translate>
            </span>
          </dt>
          <dd>{pointEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/point" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/point/${pointEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PointDetail;
