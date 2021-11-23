
import './style.scss';

interface Props {
  pageTitle: string
}

const AppHeader = ({ pageTitle }: Props) => {
  return (
    <div className="app-header" dir="rtl">
      {pageTitle}
    </div>
  )
}

export default AppHeader