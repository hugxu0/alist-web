import { Button,HStack } from "@hope-ui/solid"
import { createSignal } from "solid-js"
import { useT } from "~/hooks"
import { objStore } from "~/store"
import { api, baseName, safeBtoa } from "~/utils"
import { FileInfo } from "./info"

const Ipa = () => {
  const t = useT()
  const [installing, setInstalling] = createSignal(false)
  return (
    <FileInfo>
      <HStack spacing="$2">
        <Button
          as="a"
          href={
            "itms-services://?action=download-manifest&url=" +
            `${api}/i/${safeBtoa(
              encodeURIComponent(objStore.raw_url) +
              "/" +
              baseName(encodeURIComponent(objStore.obj.name))
            )}.plist`
          }
          onClick={() => {
            setInstalling(true)
          }}
        >
          {t(`home.preview.${installing() ? "installing" : "install"}`)}
        </Button>
        <Button
          as="a"
          colorScheme="primary"
          href={
            "apple-magnifier://install?url=" + encodeURIComponent(useLink().rawLink(objStore.obj, true))
          }
          onClick={() => {
            setInstalling(true)
          }}
        >
          {t(`home.preview.${installing() ? "tr-installing" : "tr-install"}`)}
        </Button>
      </HStack>
    </FileInfo>
  )
}

export default Ipa
