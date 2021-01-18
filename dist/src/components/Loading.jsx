import Loader from 'react-loader-spinner';
const Loading = () => {
    //other logic
    return (<Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={6000} //3 secs
    />);
};
export default Loading;
