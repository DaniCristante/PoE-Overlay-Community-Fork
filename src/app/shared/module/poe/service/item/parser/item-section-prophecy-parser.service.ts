import { Injectable } from '@angular/core'
import {
  ExportedItem,
  Item,
  ItemProperties,
  ItemSection,
  ItemSectionParserService,
  Section,
  ItemCategory,
} from '@shared/module/poe/type'
import { ClientStringService } from '../../client-string/client-string.service'

@Injectable({
  providedIn: 'root',
})
export class ItemSectionProphecyParserService implements ItemSectionParserService {
  constructor(private readonly clientString: ClientStringService) {}

  public optional = true
  public section = ItemSection.Prophecy

  public parse(item: ExportedItem, target: Item): Section {
    if (target.category != ItemCategory.Prophecy) {
      return null
    }
    
    const phrases = this.clientString.translateMultiple(new RegExp('^Prophecy(?!(Tab|Popup))'))

    const prophecySection = item.sections.find(
      (section) => phrases.findIndex((phrase) => section.content.indexOf(phrase) !== -1) !== -1
    )
    if (!prophecySection) {
      return null
    }

    const prophecyText = phrases.find((phrase) => prophecySection.content.indexOf(phrase) !== -1)

    if (!target.properties) {
      target.properties = {}
    }

    target.properties.prophecyText = prophecyText

    return prophecySection
  }
}
