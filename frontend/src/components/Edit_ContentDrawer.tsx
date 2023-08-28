import React, { useState, useEffect } from 'react';
import { Button, Drawer, theme } from 'antd';
import Status_Content from './Status_Content';



interface Props {
    setDrawer: boolean;
    handleclick: (setDrawer: string) => void;
}

// const Edit_ContentDrawer: React.FC<Props> = ({openDrawer, handleClick}) => {
const Edit_ContentDrawer: React.FC<Props> = ({setDrawer, handleclick}) => {

  const handleDrawerClose = () => {
    handleclick('');
  }
  useEffect(() => {
    
  }, []); 

  return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={handleDrawerClose}  
        open={setDrawer}
        getContainer={false}
        size='large'
        style={{height: '100%',display: 'flex', flex: 'auto', overflowY: 'scroll',justifyContent: 'flex-start' }}
        >
        <p>Some contents...</p>
      </Drawer>
  )
}
export default Edit_ContentDrawer
