import ajax from '../config/ajax'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const REMBER_TIME = 'REMBER_TIME'
export default {


	//初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	}
}