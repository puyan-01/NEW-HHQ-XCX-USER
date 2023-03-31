import i18n from '@/language'
const { t } = i18n.global

type Language = {
  text: string
  code: 'en' | 'zh-Hans'
}

// 修改语言
export const language: Language[] = [
  {
    text: t('locale.zh-hans'),
    code: 'zh-Hans',
  },
  {
    text: t('locale.en'),
    code: 'en',
  },
]
// 索引
export const languageIndex = ref(0)
// 点击修改语言
export const languageChange = (e: Language) => {
  uni.setLocale(e.code)
  i18n.global.locale.value = e.code

  languageIndex.value = e === language[0] ? 0 : 1
  uni.setNavigationBarTitle({
    title: t('my.功能设置'),
  })
}

export const visibleState = ref(false)
