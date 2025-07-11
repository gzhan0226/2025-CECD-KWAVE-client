import Footer from '../../components/Footer/Footer';
import NewsDetail from '../../components/Detail/NewsDetail';
import { Root, AppWrapper } from '../../components/Layout/AppWrapper';

export default function NewsDetailPage() {
    return (
        <Root>
            <AppWrapper>
                <NewsDetail></NewsDetail>
                <Footer></Footer>
            </AppWrapper>
        </Root>
    );
}