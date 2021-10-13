var host = "https://alhassancore.bitflex.xyz";

const V1API = {
    'category_all':host+'/api/category/all',

    'category_details_list': host+'/api/category/',

    'products_list':host+'/api/products/',
    
    'products_list_by_category':host+'/api/products/byCategoryID/',

    'products_list_by_id':host+'/api/products/byProductID/',

    'products_list_by_category_slug':host+'/api/products/byCategorySlug/',

    'featured_prod':host+'/api/products/featured/',

    'banner_image':host+'/api/banner/',

    'home_titles':host+'/api/settings/home-titles/',

    'home_features':host+'/api/settings/features/',

    'category_by_id':host+'/api/category/'
}

export default V1API;