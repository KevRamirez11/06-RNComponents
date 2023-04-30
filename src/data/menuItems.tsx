import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen'
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen'
    },
    {
      name: 'Switch',
      icon: 'toggle-outline',
      component: 'SwitchScreen'
    },
    {
      name: 'Alertas',
      icon: 'alert-circle-outline',
      component: 'AlertScreen'
    },
    {
      name: 'TextInput',
      icon: 'document-text-outline',
      component: 'TextInputScreen'
    },
    {
      name: 'Pull to refresh',
      icon: 'refresh-outline',
      component: 'PullToRefreshScreen'
    },
    {
      name: 'SelectionList',
      icon: 'list-outline',
      component: 'SectionListScreen'
    },
    {
      name: 'ModalScreen',
      icon: 'copy-outline',
      component: 'ModalScreen'
    },
    {
      name: 'InfiniteScroll',
      icon: 'download-outline',
      component: 'InfiniteScrollScreen'
    },
    {
      name: 'Slides',
      icon: 'flower-outline',
      component: 'SlidesScreen'
    },
    {
      name: 'ChangeTheme',
      icon: 'flask-outline',
      component: 'ChangeThemeScreen'
    }
]