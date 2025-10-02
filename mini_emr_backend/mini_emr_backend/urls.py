from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),      # ✅ Restore Django Admin
    path("emr/", include("emr.urls")),    # ✅ Keep Mini-EMR APIs under /emr/
    path("", include("portal.urls")),     # ✅ Patient Portal APIs
]
