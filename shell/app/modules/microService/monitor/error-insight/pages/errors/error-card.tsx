// Copyright (c) 2021 Terminus, Inc.
//
// This program is free software: you can use, redistribute, and/or modify
// it under the terms of the GNU Affero General Public License, version 3
// or later ("AGPL"), as published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import * as React from 'react';
import { Tooltip, Row, Col } from 'app/nusi';
import { get } from 'lodash';
import { resolvePath, fromNow } from 'common/utils';
import { Link } from 'react-router-dom';
import './error-card.scss';
import { Time as IconTime } from '@icon-park/react';
import i18n from 'i18n';

interface IProps{
  data: object;
}

const ErrorCard = (props: IProps) => {
  const data = get(props, 'data') as any;
  return (

    <div className="error-card-container">
      <Row className="error-card-title">
        <Col span={18}>New Exceptions</Col>
        <Col span={4} className="error-service">Service</Col>
        <Col span={2} className="error-count">Count</Col>
      </Row>
      <Row className="error-card-content">
        <Col span={18} className="error-info-container">
          <div>
            <span className="error-name">
              <Link to={resolvePath(`./error-detail/${data.errorId}`)}>
                {data.type}
              </Link>
            </span>
            <span className="error-class">{`${data.className}  in  ${data.methodName}`}</span>
          </div>
          <div className="error-file">{data.file}</div>
          <div className="error-desc">
            <Tooltip title={data.exceptionMessage} placement="topLeft" overlayClassName="error-insight-error-msg-tip">
              {data.exceptionMessage}
            </Tooltip>
          </div>
          <div className="error-time">
            <IconTime />&nbsp;&nbsp;
            {fromNow(data.updateTime, { prefix: `${i18n.t('microService:last trigger')}:` })}
            &nbsp;&nbsp;-&nbsp;&nbsp;
            {fromNow(data.createTime, { prefix: `${i18n.t('microService:first trigger')}:` })}
          </div>
        </Col>
        <Col span={4} className="error-service">
          {data.serviceName}
        </Col>
        <Col span={2} className="error-count count-num">
          {data.eventCount}
        </Col>
      </Row>
    </div>

  );
};

export default ErrorCard;
