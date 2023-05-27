import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Home</SidebarLink>
            <SidebarLink to="/">Serviços</SidebarLink>
            <SidebarLink to="/">Peças e Acessórios</SidebarLink>
            <SidebarLink to="/dashboard">Dashboard</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
            <SidebarRoute to="/">Encomende Agora</SidebarRoute>
        </SidebtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;