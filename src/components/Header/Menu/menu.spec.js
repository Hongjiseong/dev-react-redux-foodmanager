// import React from 'react';
// import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';
// import Header from './header.container';
// import { loadHeader } from '../../actions/_index';
// import { Provider } from 'react-redux';

// const mockStore = configureStore([]);

// describe('<Header /> 컨테이너는', () => {
//   let store;
//   let component;

//   beforeAll(() => {
//     store = mockStore({
//       header: {
//         nickname:'',
//         username:''
//       }
//     })

//     store.dispatch = jest.fn();

//     component = renderer.create(
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     )
//   })

//   it('- 리덕스 스토어와 컴포넌트가 연결되어 렌더링 됩니다', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });

//   it('- 처음에 loadHeader() 액션생성자 함수를 호출합니다', () => {
//     expect(store.dispatch).toHaveBeenCalledTimes(1);
//     expect(store.dispatch).toHaveBeenCalledWith(
//       loadHeader({payload: {header: {nickname:'',username:''}}})
//     )
//   })

//   it('- 상단 메뉴를 클릭시 클래스가 link 에서 link on 으로 바뀝니다', () => {
//     let items = component.root.findAllByProps({className:'item'});
//     items.map((item) => {
//       const menu = item.children[0];
//       renderer.act(() => {
//         menu.props.onClick();
//       });
//       expect(menu.props.className).toEqual('link on');
//     })
//   })

//   it('- 상단 메뉴를 클릭시 클래스가 link 에서 link on 으로 바뀝니다', () => {
//     let items = component.root.findAllByProps({className:'item'});
//     items.map((item) => {
//       const menu = item.children[0];
//       renderer.act(() => {
//         menu.props.onClick();
//       });
//       expect(menu.props.className).toEqual('link on');
//     })
//   })
// })