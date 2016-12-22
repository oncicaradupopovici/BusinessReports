using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BusinessReports.Data.Migrations
{
    public partial class RemoveCountry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Caens_Countries_CountryId",
                table: "Caens");

            migrationBuilder.DropForeignKey(
                name: "FK_Counties_Countries_CountryId",
                table: "Counties");

            migrationBuilder.DropIndex(
                name: "IX_Counties_CountryId",
                table: "Counties");

            migrationBuilder.DropIndex(
                name: "IX_Counties_Code_CountryId",
                table: "Counties");

            migrationBuilder.DropIndex(
                name: "IX_Caens_CountryId",
                table: "Caens");

            migrationBuilder.DropIndex(
                name: "IX_Caens_Code_CountryId",
                table: "Caens");

            migrationBuilder.DropColumn(
                name: "CountryId",
                table: "Counties");

            migrationBuilder.DropColumn(
                name: "CountryId",
                table: "Caens");

            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.CreateIndex(
                name: "IX_Counties_Code",
                table: "Counties",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Caens_Code",
                table: "Caens",
                column: "Code",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Counties_Code",
                table: "Counties");

            migrationBuilder.DropIndex(
                name: "IX_Caens_Code",
                table: "Caens");

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(maxLength: 20, nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.Id);
                });

            migrationBuilder.AddColumn<int>(
                name: "CountryId",
                table: "Counties",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CountryId",
                table: "Caens",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Counties_CountryId",
                table: "Counties",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Counties_Code_CountryId",
                table: "Counties",
                columns: new[] { "Code", "CountryId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Caens_CountryId",
                table: "Caens",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Caens_Code_CountryId",
                table: "Caens",
                columns: new[] { "Code", "CountryId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Countries_Code",
                table: "Countries",
                column: "Code",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Caens_Countries_CountryId",
                table: "Caens",
                column: "CountryId",
                principalTable: "Countries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Counties_Countries_CountryId",
                table: "Counties",
                column: "CountryId",
                principalTable: "Countries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
