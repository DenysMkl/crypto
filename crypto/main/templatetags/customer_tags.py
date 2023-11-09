from django import template


register = template.Library()


@register.filter(name='addClass')
def split(value, arg):
    return value.as_widget(attrs={'class': arg})