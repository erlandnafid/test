import Container from './components/Container.vue';
import ConfirmRegis from './components/ConfirmRegis.vue';
import MainPage from './components/MainPage.vue';

export const routes = [
    { path: '', component: Container },
    { path: '/confirm-regis', component: ConfirmRegis },
    { path: '/main-page', component: MainPage }
];