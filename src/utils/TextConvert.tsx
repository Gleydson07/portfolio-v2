import { FormattedMessage } from "react-intl"

  const loadLangText = (id: string, defaultMessage: string) => {
    return (
      <FormattedMessage
        id={id}
        defaultMessage={defaultMessage}
      />
    )
  }

  export default loadLangText