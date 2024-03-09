import React, { useCallback, useEffect, useState } from 'react'
import images from '../../../assets'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import NavbarItem from './NavbarItem'
import NavbarMobile from './NavbarMobile'
import useModal from '../../../hooks/useModal'
import Modal from '../../Modal'
import Search from '../../Search'
import { useSelector } from 'react-redux'

const HeaderBar = () => {
  const [isSticky, setSticky] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { showProductModal, handleProductModal } = useModal()
  const user = useSelector((state) => state?.auth?.user?.user)
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])
  const closeMobileMenu = useCallback(() => {
    setShowMobileMenu(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      const isSticky = offset > 60
      setSticky(isSticky)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Modal
        showProductModal={showProductModal}
        handleProductModal={handleProductModal}
        full
      >
        <Search />
      </Modal>
      <div className="header__outer">
        <div
          className={`${
            isSticky ? 'header--sticky header' : 'header'
          } header--init`}
        >
          <div className="header__row header__row--no-top-decor">
            <div className="header__col-left">
              <div className="header__logo">
                <Link to={'/'}>
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src={images.logo}
                    alt="Logo"
                  />
                </Link>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="header__menu-button h-cb"
              >
                <Icon
                  icon="gravity-ui:bars"
                  width="35"
                  height="30"
                  vFlip={true}
                />
              </button>
            </div>
            <div className="header__col-center">
              <NavbarItem />
            </div>
            <div className="header__col-right">
              <div className="header__col-right-wrap">
                <div className="header__search-button header__button-link">
                  <Link onClick={handleProductModal}>
                    <Icon icon="iconamoon:search-bold" />
                  </Link>
                </div>
                <div className="header__auth-button header__button-link">
                  <Link to={`${user ? 'my_account' : 'login'}`}>
                    <Icon icon="ph:user-bold" />
                  </Link>
                </div>
                <div className="header__wishlist-button header__button-link">
                  <Link>
                    <Icon icon="iconamoon:heart-bold" />
                    <span className="count-info">
                      <span>99</span>
                    </span>
                  </Link>
                </div>
                <div className="header__cart-button header__button-link">
                  <Link>
                    <Icon icon="pepicons-pop:cart" />
                    <span className="count-info">
                      <span>1</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <svg
              className="img-fluid header--decor-bottom"
              viewBox="0 0 669 3"
              x="0"
              y="0"
              preserveAspectRatio="none"
            >
              <path
                d="m669 0-.001 2.12a73.554 73.554 0 0 1-.411-.018 17935.581 17935.581 0 0 0-3.644.084 88.66 88.66 0 0 1-3.52-.095c-.4-.016-.8-.032-1.2-.046-.039 0-.084-.01-.125-.02-.052-.013-.097-.023-.114-.008-1.344.29-2.8.241-4.279.193-.822-.027-1.651-.054-2.472-.024-2.838-.281-5.646-.225-8.215.028h-.09l-.294.011c-1.394.055-2.956.116-4.127-.067-2.024-.313-4.047-.193-5.92-.081-.311.018-.619.037-.921.053-1.07.057-2.155.107-3.244.157-1.04.048-2.083.097-3.119.151-2.36.113-4.571-.056-6.871-.252-.365-.034-.74-.085-1.124-.138-1.217-.166-2.517-.344-3.835-.003-1.553-.252-3.017-.224-4.391.253-.134-.049-.254-.104-.366-.155-.212-.098-.395-.182-.59-.182-2.39-.084-4.78-.168-7.14-.14-.579.013-1.158.113-1.734.212-.612.105-1.22.209-1.821.209-.697 0-1.374-.11-2.055-.219a17.223 17.223 0 0 0-1.559-.202c-.371-.019-.818.059-1.367.154-.291.05-.611.106-.963.155-.499-.152-1.067-.327-1.685-.518-.53-.164-1.098-.34-1.691-.521-.726.195-.495.453-.263.713.303.34.608.68-1.201.887.12.028.247.056.374.084l.373.085c1.109 0 2.211.007 3.308.014 1.091.007 2.177.014 3.264.014v.056c-2.599.028-5.198.056-7.797.056-.303 0-.62-.077-.932-.153a8.554 8.554 0 0 0-.442-.1c.747 0 .986-.168.627-.337-.244-.123-.583-.225-.964-.339-.225-.067-.465-.139-.708-.222-1.016.393-2.181.365-3.406.14h-.03c-3.435-.59-6.871-.421-10.605-.028a5.513 5.513 0 0 1-.308-.11c-.548-.207-1.212-.458-2.59-.058-.396.124-1.245.046-2.132-.035-.518-.047-1.05-.095-1.512-.106-1.284-.014-2.576-.014-3.869-.014-1.292 0-2.584 0-3.868-.014-.902 0-1.822-.067-2.594-.124a76.61 76.61 0 0 0-.632-.044c-.541.063-.678.23-.802.381-.149.183-.279.341-1.08.265-.747-.085-1.345-.31-1.763-.646-.926-.028-1.852-.056-2.898-.085.044.123.087.23.142.367l.068.167-.64-.034-.633-.034c-.631-.033-1.261-.067-1.924-.1.359-.113.598-.197.986-.337-1.179-.165-1.937.026-2.591.191-.125.032-.247.062-.366.09a634.414 634.414 0 0 0-6.13-.681h-1.98c-.84.246-1.65.491-2.376.736-1.268-.115-2.535-.243-3.755-.367l-1.652-.166c-.339.01-.677.033-1.01.055-.636.043-1.249.085-1.798.03-2.36-.225-3.346-.253-6.064-.029-.176.015-.386-.026-.597-.067a2.95 2.95 0 0 0-.538-.073c-.283.016-.565.062-.921.12-.247.04-.529.086-.872.132l-.144-.022c-1.067-.169-2.55-.403-3.978.107-1.256-.135-2.501-.088-3.742-.04-.825.03-1.648.062-2.472.04a39.204 39.204 0 0 1-1.108-.043c-.993-.047-1.957-.094-2.985.07-.54.075-1.013 0-1.53-.084-.455-.074-.945-.153-1.546-.14-1.221.02-2.43.125-3.633.23-2.123.183-4.228.366-6.345.079-2.045-.274-3.924-.172-5.849-.067-.24.013-.481.027-.723.039-.829.037-1.645.123-2.465.21-.421.044-.844.089-1.269.127-.538-.225-1.016-.421-1.703-.702-.448.393-.806.702-1.135.983l-.771.095c-.611.076-1.19.148-1.769.208l-.612-.12-.642-.127c-.117-.028-.247-.064-.375-.1-.261-.074-.51-.144-.611-.125-1.613.31-2.42-.028-3.346-.561l-.161.185c-.171.195-.277.317-.346.404-.459.017-.91.04-1.355.061-1.033.05-2.035.1-3.037.08-1.464-.028-2.957-.169-4.361-.337a72.572 72.572 0 0 1-.464-.054c-1.054-.124-1.991-.234-3.27-.087-.684.073-1.44.063-2.24.052-.738-.01-1.513-.021-2.301.033.508.14 1.016.28 1.912.533l-4.212.056c-.628-.618-1.613-.983-2.48-.814-.089.017-.189.034-.295.052l-.15.026-.153.027c-.654.124-1.21.317.061.85-.44-.049-.866-.09-1.236-.126-.71-.07-1.214-.118-1.214-.155.025-.474-.842-.508-1.669-.54-.154-.007-.307-.013-.452-.022-.392-.012-.782-.028-1.172-.045-1.453-.063-2.9-.126-4.384.073-.377.056-.806.038-1.244.02-.222-.01-.447-.02-.668-.02-.489 0-.983-.027-1.477-.054-1.166-.065-2.331-.13-3.423.167-.119.028-.388.028-.537.028-1.578-.25-3.156-.182-4.734-.114-.901.039-1.803.078-2.705.058-1.075-.023-2.15-.117-3.226-.212l-.807-.07c-2.3-.168-4.301 0-6.064.73-.717-.617-1.822-.87-3.465-.533.043.041.08.088.126.149.049.064.11.143.203.244-.287-.008-.613-.009-.935-.01-.752-.002-1.479-.004-1.605-.102-.643-.46-1.308-.356-2.13-.23a10.358 10.358 0 0 1-2.5.117c-3.525-.308-3.585-.308-5.825.871.149-.393.239-.617.388-.982-1.054.023-2.104.042-3.149.061-2.686.05-5.34.098-7.964.22-2.725.143-5.419.122-8.209.1a398.097 398.097 0 0 0-3.142-.016c.153-.118.28-.212.394-.295.13-.095.241-.177.353-.267-.095 0-.208-.012-.306-.022-.119-.012-.216-.022-.232-.006-.888.525-2.38.624-3.945.728-.277.018-.556.037-.835.058l-.003-.003a13.806 13.806 0 0 1-.684-.587c-.86.051-2.775.081-4.278.085h-.71c-.663-.002-1.163-.012-1.315-.028-1.068-.078-2.055.034-3.061.148-1.188.134-2.403.271-3.81.104-1.763-.213-3.716-.106-5.664 0-.363.02-.726.039-1.087.056-1.462.095-3.019-.026-4.723-.158a97.178 97.178 0 0 0-2.626-.179c.388.225.657.45.717.646a48.657 48.657 0 0 0-2.928-.084c-.119 0-.231.007-.343.014-.112.007-.224.014-.344.014-.627.112-1.195.253-1.732.478-.478.224-2.39.196-3.406.084-1.314-.169-.986-.618-.119-1.151-.908.045-1.777.11-2.612.17-1.719.127-3.289.242-4.737.166l-.393-.024c-2.175-.134-4.386-.27-6.358-.032-1.408.167-2.622.03-3.811-.104-1.005-.114-1.992-.226-3.06-.148-.17.009-.767.015-1.541.016h-.484c-1.504-.002-3.418-.022-4.278-.073-.12.099-.232.197-.344.295-.112.099-.224.197-.344.295-.278-.021-.558-.04-.835-.058-1.564-.104-3.056-.203-3.944-.728-.017-.016-.113-.006-.232.006-.098.01-.211.022-.306.022.112.09.223.172.353.267.113.083.241.177.394.295-.998 0-1.978.005-2.947.01-2.86.016-5.616.031-8.405-.095-2.623-.121-5.278-.17-7.963-.219-1.045-.019-2.095-.038-3.15-.062.15.366.239.59.389.983-2.203-1.16-2.298-1.152-5.65-.884l-.176.014a10.36 10.36 0 0 1-2.091-.056 17.26 17.26 0 0 1-.504-.068c-.764-.11-1.419-.203-2.035.236-.125.098-.852.1-1.604.102-.322.001-.649.002-.935.01.093-.101.153-.18.202-.244.047-.06.083-.108.126-.149-1.642-.337-2.748-.084-3.465.534-1.762-.702-3.764-.87-6.064-.73-.538.034-1.076.076-1.613.119-.807.064-1.613.128-2.42.162-.902.02-1.808-.019-2.713-.058-1.584-.068-3.167-.136-4.725.114-.15.028-.418.028-.538-.028-1.091-.296-2.257-.232-3.423-.167-.494.027-.988.054-1.476.054-.208 0-.426.007-.645.013-.441.012-.888.025-1.267-.013-1.462-.2-2.924-.136-4.387-.073-.39.017-.779.033-1.169.045l-.267.007c-.882.021-1.909.046-1.854.555 0 .037-.504.086-1.214.155-.37.036-.796.077-1.236.126 1.466-.615.501-.778-.243-.903-.105-.018-.206-.035-.295-.052-.866-.169-1.852.196-2.479.814l-4.212-.056c.582-.159.987-.273 1.334-.371l.578-.162c-.774-.054-1.548-.044-2.288-.033-.804.01-1.569.021-2.253-.052-1.298-.149-2.267-.033-3.324.092a74.17 74.17 0 0 1-.41.049c-1.404.168-2.868.309-4.362.337-1.002.02-2.004-.03-3.036-.08-.445-.022-.896-.044-1.355-.06-.09-.113-.239-.281-.508-.59-.926.533-1.733.898-3.346.561-.079-.015-.257.025-.457.079l-.244.068c-.101.028-.199.056-.284.078-.407.082-.814.164-1.248.245-.452-.06-.912-.112-1.381-.165a95.993 95.993 0 0 1-1.165-.136c-.329-.281-.687-.59-1.135-.983-.288.117-.534.22-.764.317-.319.133-.609.254-.939.385-.426-.038-.848-.083-1.269-.127a40.81 40.81 0 0 0-2.465-.21c-.242-.012-.483-.026-.724-.039-1.924-.105-3.804-.207-5.848.067-2.137.269-4.249.091-6.368-.087-1.199-.1-2.401-.202-3.61-.222-.608-.013-1.094.07-1.541.147-.521.089-.99.168-1.536.078-1.049-.165-2.001-.119-2.987-.071-.362.018-.728.035-1.105.043-.824.022-1.647-.01-2.473-.04-1.24-.048-2.485-.095-3.741.04-1.448-.517-2.98-.27-4.025-.1l-.098.015a50.668 50.668 0 0 1-.548-.095c-.519-.093-.882-.157-1.244-.157-.167 0-.353.036-.538.073-.212.041-.421.082-.597.067-2.719-.224-3.704-.196-6.064.028-.549.056-1.163.014-1.798-.029a26.072 26.072 0 0 0-1.011-.055c-.575.057-1.168.114-1.772.172-1.183.114-2.409.231-3.635.361-.727-.218-1.54-.464-2.382-.736h-1.971c-2.02.218-3.991.436-6.102.68-.131-.03-.264-.064-.402-.1-.647-.17-1.398-.366-2.556-.18.359.112.598.196.986.337a736.33 736.33 0 0 0-3.196.168l.067-.167c.055-.136.099-.244.142-.367-1.046.029-1.972.057-2.898.085-.418.309-1.015.561-1.762.646-.687.065-.88-.042-1.016-.189l-.065-.076c-.123-.15-.26-.318-.801-.381-.221.014-.457.03-.706.049-.763.055-1.642.12-2.52.12-1.285.013-2.577.013-3.869.013-1.292 0-2.584 0-3.868.014-.517 0-1.119.052-1.693.102-.82.072-1.583.138-1.952.039-1.378-.4-2.041-.15-2.59.058-.105.04-.206.078-.308.11-3.764-.393-7.17-.561-10.605.028h-.03c-1.224.225-2.39.253-3.405-.14-.18.056-.363.108-.54.159-.443.125-.856.242-1.133.402-.329.197-.09.337.627.337a8.608 8.608 0 0 0-.441.1c-.312.076-.63.153-.933.153-2.599 0-5.198-.028-7.797-.056v-.056l1.64-.005 1.646-.01c1.098-.006 2.196-.013 3.286-.013l.374-.085c.127-.028.254-.056.373-.084-1.684-.192-1.535-.51-1.263-.828l.065-.073c.231-.261.458-.517-.266-.7-1.254.394-2.42.759-3.375 1.04-.381-.051-.718-.114-1.02-.17-.528-.097-.95-.175-1.31-.14-.55.038-1.084.123-1.61.208-.673.108-1.334.214-2.005.214-.62 0-1.23-.106-1.842-.211-.569-.099-1.137-.197-1.713-.21-2.36-.028-4.75.056-7.14.14-.195 0-.378.084-.59.182-.111.051-.231.107-.365.155-1.345-.477-2.809-.505-4.392-.253-1.339-.34-2.626-.164-3.835.003-.382.052-.757.104-1.124.138-2.3.224-4.51.365-6.87.252-1.037-.054-2.08-.103-3.12-.15-1.089-.05-2.174-.101-3.243-.158-.303-.016-.61-.035-.922-.053-1.873-.112-3.896-.232-5.92.08-1.17.184-2.733.123-4.126.068l-.295-.011h-.09c-2.568-.253-5.376-.309-8.214-.028-.873-.043-1.754-.017-2.626.009-1.426.042-2.828.084-4.126-.178a.55.55 0 0 0-.063.009c-.05.008-.119.02-.176.02-.404.014-.806.03-1.207.046-1.17.047-2.333.094-3.513.094-.746 0-1.493-.028-2.24-.056V0h669ZM82.599 1.793c.777.056 1.225.084 1.643.112-.418-.225-.478-.225-1.643-.112Zm499.522.072-.075.04.306-.02c.343-.023.744-.05 1.337-.092-1.064-.106-1.21-.112-1.568.072ZM88.756 1H87.24c.873.51 1.09.49 2.259.035-.244-.01-.492-.022-.744-.035Zm490.291 0h-1.515c-.252.013-.499.025-.743.035 1.168.455 1.385.476 2.258-.035Zm19.818.147c-.359 0-.717 0-1.076.028 0 .028.008.05.015.07a.187.187 0 0 1 .015.07c.179 0 .359-.007.538-.014.179-.007.359-.014.538-.014 0-.028-.008-.049-.015-.07a.187.187 0 0 1-.015-.07Zm-531.442 0a.29.29 0 0 1-.03.14c.18 0 .359.007.538.014.18.007.359.014.538.014 0-.028.007-.049.015-.07a.196.196 0 0 0 .015-.07c-.18 0-.359-.007-.538-.014-.179-.007-.358-.014-.537-.014ZM576.452 1h-3.295c-.415.041-.845.091-1.3.144l-.266.031c.403.017.79.039 1.162.06 1.503.087 2.767.16 3.916-.2a9.364 9.364 0 0 0-.217-.035ZM93.132 1h-3.295a9.08 9.08 0 0 0-.218.035c1.153.36 2.442.286 3.943.2.366-.022.744-.044 1.136-.06l-.267-.031A77.532 77.532 0 0 0 93.13 1ZM351.91 1h-3.571c1.182.119 2.368.07 3.571 0Zm-33.946 0h-3.573c1.193.07 2.379.119 3.573 0Z"
                fill="#0052b1"
                fill-rule="evenodd"
              />
            </svg>

            <NavbarMobile
              className={showMobileMenu ? 'active' : ''}
              onClose={closeMobileMenu}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
