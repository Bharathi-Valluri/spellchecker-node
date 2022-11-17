const typo = require('typo-js')
const dictionary = new typo('en_US')
const appConst = require('../routers/constants')

const spellChecker = (req, res) => {
  try {
    const { paragraph } = req.body
    const splitingWords = paragraph.split(' ')
    let misspelt_word = []
    let suggestions = []
    splitingWords.forEach(element => {
      console.log(element)

      var is_spelled_correctly = dictionary.check(element)
      if (is_spelled_correctly === false) {
        var ArrayOfSuggestions = dictionary.suggest(element)
        suggestions.push(ArrayOfSuggestions)
        misspelt_word.push(element)
        console.log('wrongly spelt', ArrayOfSuggestions)
      }
    })
    res.status(200).json({
      status: appConst.status.success,
      Misspelt_word: misspelt_word,
      suggestions: suggestions,
      message: 'Checked the missplet words successfully!....'
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      status: appConst.status.fail,
      message: 'Failed to identity the wrongly splet words.'
    })
  }
}

module.exports = { spellChecker }
