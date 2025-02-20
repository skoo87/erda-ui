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

import React from 'react';
import i18n from 'i18n';
import { Col, Row } from 'app/nusi';
import moment from 'moment';

import testPlanStore from 'project/stores/test-plan';

const NumberInfo = () => {
  const planReport = testPlanStore.useStore(s => s.planReport);
  const { testPlan, relsCount, apiCount } = planReport;
  const data = React.useMemo(() => {
    const { startedAt, endedAt } = testPlan || {};
    const { total: testCaseCount = 0, succ: testCasePassCount = 0 } = relsCount || {};
    const { total: apiTotalCount = 0, passed: apiPassedCount = 0 } = apiCount || {};
    const days = startedAt && endedAt ? moment(endedAt).diff(moment(startedAt), 'days') : 0;
    return { days, testCaseCount, testCasePassCount, apiTotalCount, apiPassedCount };
  }, [apiCount, relsCount, testPlan]);
  const numInfo = [
    {
      num: data.days,
      label: i18n.t('project:test days'),
    },
    {
      num: data.testCaseCount,
      label: i18n.t('project:total number of use cases'),
    },
    {
      num: `${Math.round(data.testCasePassCount / data.testCaseCount * 100 || 0)}%`,
      label: i18n.t('project:test pass rate'),
    },
    {
      num: data.apiTotalCount,
      label: i18n.t('project:total number of interfaces'),
    },
    {
      num: data.apiPassedCount || 0,
      label: i18n.t('project:interface pass number'),
    },
    {
      num: `${Math.round(data.apiPassedCount / data.apiTotalCount * 100 || 0)}%`,
      label: i18n.t('project:interface pass rate'),
    },
  ];

  return (
    <Row gutter={0} type="flex" justify="space-between" className="px16 py12 border-all">
      {
        numInfo.map(info => (
          <Col span={4} key={info.label}>
            <div className="color-success fz20 text-center">{info.num || 0}</div>
            <div className="color-text-desc mt4 text-center">{info.label}</div>
          </Col>
        ))
      }
    </Row>
  );
};

export default NumberInfo;
