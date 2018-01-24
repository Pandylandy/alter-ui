import React from 'react';
import { connect } from 'react-redux';
import { Button, Upload, Icon, List, Collapse, Card, Popconfirm, Row, Col } from 'antd';
import { deleteStructure } from '../core/actions';
import { modal } from '../../base/actions';


const Panel = Collapse.Panel;

const uploadProps = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
};

const IndexPage = ({ structure, editStructure, deleteStructure, drawStructure, createTask }) => (
  <div>
    <Row style={{ marginBottom: '20px' }}>
      <Col span={8}>
        <Upload {...uploadProps}>
          <Button icon="upload">
                Upload file
          </Button>
        </Upload>
      </Col>
      <Col span={8} offset={8} style={{ textAlign: 'right' }}>
        <Button type="dashed" onClick={() => drawStructure()} icon="plus" style={{ marginRight: '8px' }}>Add structure</Button>
        <Button type="primary" onClick={() => createTask(structure)} icon="right" disabled={!structure.length}>Validate</Button>
      </Col>
    </Row>
    <div>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        dataSource={structure}
        renderItem={item => (
          <List.Item>
            <Card
              style={{ width: '100%' }}
              cover={<img alt="example" src={item.base64} />}
              actions={
                [<Icon type="edit" onClick={() => editStructure(item.id)} />,
                  <Popconfirm
                    placement="topLeft"
                    title="Are you sure delete this structure?"
                    onConfirm={() => deleteStructure(item.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Icon type="delete" />
                  </Popconfirm>]}
            />
          </List.Item>
        )}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  structure: state.structure,
});

const mapDispatchToProps = dispatch => ({
  drawStructure: () => dispatch({ type: 'DRAW_STRUCTURE' }),
  deleteStructure: id => dispatch(deleteStructure(id)),
  editStructure: id => dispatch(modal(true, 'EDIT_STRUCTURE_INDEX', id)),
  createTask: structure => dispatch({ type: 'CREATE_TASK_INDEX', structure }),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
