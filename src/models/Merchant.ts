import { autoserializeAs } from 'cerialize'
import {
  PerxCategory,
  PerxTag,
} from './Taxonomy'
import { PerxImage } from '..'

export class PerxMerchant {

  @autoserializeAs('id')
  id!: number

  @autoserializeAs('name')
  name: string = ''

  @autoserializeAs(PerxImage, 'images')
  images: PerxImage[] = []

  @autoserializeAs('ecommerce_only')
  ecommerceOnly: string | null = null

  @autoserializeAs('website')
  website: string | null = null

  @autoserializeAs('custom_fields')
  customFields: any = {}

  @autoserializeAs(PerxCategory, 'category_tags')
  categoryTags: PerxCategory[] = []

  @autoserializeAs('is_favorite')
  isFavorite: boolean = false

  @autoserializeAs('is_featured')
  isFeatured: boolean = false

  @autoserializeAs(PerxTag, 'tags')
  tags: PerxTag[] = []
}