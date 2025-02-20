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


import {
  Col,
  ConfigProvider as AntdConfigProvider,
  Dropdown,
  Empty,
  Form,
  Icon,
  notification,
  Row,
  Skeleton,
  Slider,
  Spin,
  Steps,
  Switch,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  TimePicker,
  Timeline,
  Upload,
  version,
  Table as AntTable,
} from 'antd';
import {
  Button,
  BackTop,
  Badge,
  Carousel,
  Cascader,
  Checkbox,
  Collapse,
  ConfigProvider as Antd4ConfigProvider,
  Comment,
  Divider,
  Drawer,
  DatePicker,
  Input,
  message,
  Menu,
  Modal,
  Popconfirm,
  Popover,
  Rate,
} from 'antd-latest';
import '@terminus/nusi/dist/nusi.scss';
import 'antd/dist/antd.less';
import 'antd-latest/dist/antd.less';
import { FixedSelect } from './fixed-select';
import FixRangePicker from './range-picker';
import {
  Affix,
  Alert,
  Anchor,
  Avatar,
  // Input,
  Card,
  Container,
  InputNumber,
  Radio,
  Pagination,
  Progress,
  Tooltip,
  Filter,
  FormBuilder,
  Shell,
  Search,
  SideNavigation,
  PageHeader,
  GlobalNavigation,
  Breadcrumb,
  Tag,
  Table,
  Title,
  Panel,
  List,
  Ellipsis,
  SelectCategory,
  SelectCombo,
  Switch as NusiSwitch,
  ConfigProvider as NusiConfigProvider,
  Tree as NusiTree,
  Popover as NusiPopover,
  Select as NusiSelect,
  Icon as NusiIcon,
  Empty as NusiEmpty,
  Cascader as NusiCascader,
  Tag as NusiTag,
} from '@terminus/nusi';

const locale = window.localStorage.getItem('locale');
const isZh = locale === 'zh';

// 直接修改使用时会有ts警告
let temp = Tooltip;
temp.defaultProps.type = 'shallow';


temp = Pagination;
temp.defaultProps = {
  ...Pagination.defaultProps,
  pageSize: 15,
  pageSizeOptions: ['15', '30', '45', '60'],
  showTotal: (total) => (isZh ? `共计 ${total} 条` : `total ${total} items`),
};

export {
  Affix,
  Anchor,
  // AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  // Calendar,
  Card,
  Container,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Comment,
  DatePicker,
  Divider,
  Dropdown,
  Drawer,
  Ellipsis,
  Empty,
  Filter,
  Form,
  FormBuilder,
  Icon,
  Input,
  InputNumber,
  List,
  message,
  Menu,
  Modal,
  notification,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Panel,
  FixRangePicker as RangePicker,
  Radio,
  Rate,
  Row,
  FixedSelect as Select,
  Skeleton,
  Slider,
  Spin,
  Steps,
  Switch,
  Search,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Title,
  // Mention,
  Upload,
  version,
  Shell,
  SideNavigation,
  PageHeader,
  GlobalNavigation,
  SelectCategory,
  SelectCombo,
  AntdConfigProvider,
  Antd4ConfigProvider,
  AntTable,

  NusiConfigProvider,
  NusiTree,
  NusiPopover,
  NusiSelect,
  NusiIcon,
  NusiEmpty,
  NusiCascader,
  NusiTag,
};
