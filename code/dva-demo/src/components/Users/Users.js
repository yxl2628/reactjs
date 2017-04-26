import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.css';

const PAGE_SIZE = 10;
function Users({ dispatch, list: dataSource,loading, total, page: current }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
  }
  function editHandler(id) {
    console.log(`TODO: ${id}`);
  }
  function pageChangeHandler(page) {
     dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
     }));
   }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Adress',
      dataIndex: 'adress',
      key: 'adress',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="JavaScript:void(0)" onClick={editHandler.bind(null,id)}>Edit </a>
          <Popconfirm title="确定要删除么?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="JavaScript:void(0)">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <div className={styles.normal}>
      <div>
        <Table columns={columns} dataSource={dataSource} loading={loading} rowKey={record => record.id} pagination={false} />
        <Pagination className="ant-table-pagination" total={total} current={current} pageSize={PAGE_SIZE} onChange={pageChangeHandler} />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}
export default connect(mapStateToProps)(Users);
